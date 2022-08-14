# Mock Server

This mock server helps you test responses with different statuses

## How to use

URL: /mock-server/api/v1/{id}?timeout={number}&status-code={number}

```sh
id - Request id
timeout (optional) - Server response timeout (default = 0)
status-code (optional) - Response status code  (default = 200)
```

## Response examples

URL: /mock-server/api/v1/20

```sh
{ "message":"Your id is 20, timeout is 0 ms, response status code is 200" }
```

URL: /mock-server/api/v1/25?timeout=100&status-code=500

```sh
{ "error":{"status":"500","timeout":"100","id":25 }}
```

# Live Server

https://khovalkin.com/mock-server/api/v1/
