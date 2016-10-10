# ExchangeRateBoard

## How it works

### Getting the data

Using an AJAX request to http://api.fixer.io/latest to get the most recent daily exchange rates. The default base is the euro, so using the query base=USD a JSON with several currencies is obtained.

### Getting the data ready

The JSON is then parsed and an array with Objects containing the pairs required for the dataset is created.

### Finding the dataset and sending the data

The specific database is found using datasets.createOrFind() and the data is posted to the data set using post().

### Widgets

I would like to be able to see how the exchange currencies change over time so a line plot widget was created with filtered results. I noticed that there were some exchanges with a difference of over 10000. This made it had to see the data so I choose only to see AUD, EUR, and GBP.

### Customize

It is possible to create more widgets to see data that is closer together on a line plot.

## Tools used

I tried to keep it simple. I have a lot of experience with node so I naturally went with that. I decided to use an ajax-request package to make the api call easy. Everything else I used  was what pretty much a text editor (VIM then Atom) and some stack overflow forums for some best practice guidelines.

## Status

I would call this project partially complete for now. I would like to refactor out some of the functionality and complete the delete section of the modify function at a later time.
