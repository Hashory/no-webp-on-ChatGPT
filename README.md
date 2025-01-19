# Template Simple Browser Extension with Deno

## Development Setup

1. Install [Deno](https://deno.land/).

1. Clone the repository.

   ```sh
   git clone https://github.com/Hashory/picture-in-picture_for_tver.git
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

[CC0-1.0 license](LICENSE)
