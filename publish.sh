!/bin/bash

# Testing whether it works locally
npm link
npm link @elitmiar/url_query_builder

# Versioning https://docs.npmjs.com/updating-your-published-package-version-number
npm version
npm publish