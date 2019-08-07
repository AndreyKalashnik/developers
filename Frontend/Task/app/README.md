## Audience

Technical review team at MEWS.

## Background

This is the exercise for the Front-End position at [MEWS](https://www.mewssystems.com).

## Proof of concept

A simple application that interacts with the provided Back-End API to allow the user to see the exchange rates for a specific subset of currencies, using a simple design.

## Out of scope

- Integration tests.
- Unit tests.
- Visual regression tests.
- A wonderful design.

## Behavior

0. Show a loading screen.
1. On page load, `GET /configuration` so we can get a list of rates.
   - If the request fails, `GET /configuration` until it receives the answer, user won't notice anything.
1. Once `GET /configuration` answers, use Object.keys() to extract the ids, and request `GET /rates?currencyIds[]=id1&currencyIds[]=id2`
1. Update the redux store for exchanges. The intended data structure is as follows:

```
{
  "id1": [
    { code: 'USD', name: 'United States Dollar' },
    { code: 'UAH', name: 'Ukranian hrivna' }
    {
      current: 1.5,
      previous: 1.4
    }
  }
]
```

4. Updating the store will trigger a re-render of the homepage
   - Hide loading
   - Populate a select that will allow the user to see the exchange rate.
5. User selects an exchange from the select.
6. We have a onChange() handler on the select that will select a specific `exchange.id` and show it on screen
   - Show FROM currency
   - Show TO currency
   - Show exchange rate for 1 FROM to TO. (1 USD = 28 UAH)
7. Arrow indicator behavior:
   - After the user chooses an option from the select, we start a recursive setTimeout that will ask the server for the latest exchange rate for that specific id.
   - If the value is lower than previous, show UP arrow.
   - If the value is the same as previous, show STAGNATING icon.
   - If the value is higher than previous, show DOWN arrow.
