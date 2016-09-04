# My wedding website

A basic ember frontend that stores all RSVP's for guests and +1's into a firebase database.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Environment variables

```
$ cp .env-example .env
```

And replace the variables with your own firebase credentials.

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Deploying

```
$ ember deploy production
```

