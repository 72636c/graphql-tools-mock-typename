# graphql-tools-mock-typename

## Usage

1. Node.js 14+
2. `yarn`
3. `yarn start`

## Expected output

```json
{
  "data": {
    "flying": {
      "ability": {
        "name": "Hello World"
      }
    }
  }
}
```

## Actual output

```json
{
  "errors": [
    {
      "message": "__typename does not exist on type Bird",
      "locations": [
        {
          "line": 3,
          "column": 5
        }
      ],
      "path": ["flying", "ability"]
    }
  ],
  "data": {
    "flying": null
  }
}
```
