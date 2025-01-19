# No WebP on ChatGPT

## Description

_Easily download images as PNG instead of **WebP** on
[ChatGPT.com](https://chatgpt.com), no hassle, no surprises._

## Download

// TODO

## Development

1. Install [Deno](https://deno.land/).

1. Clone the repository.

   ```sh
   git clone https://github.com/Hashory/no-webp-on-ChatGPT.git
   ```

1. Cache the type files required for development.

   ```sh
   deno cache deno.json
   ```

1. Generate the extension files in the `/dist` directory.

   `bundle.ts` will be executed. Some permissions may be required.

   ```sh
   deno task bundle
   ```

1. Format the code.

   ```sh
   deno fmt
   ```

## License

[MIT](LICENSE)
