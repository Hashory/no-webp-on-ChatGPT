<h1>
<img src="public/icon/icon256.png" alt="logo" style="height:1.3em; aspect-ratio:1/1; vertical-align:middle;">
No WebP on ChatGPT
</h1>

![Save button tooltip saying 'This ain’t WebP. It’s PNG.' for downloading images as PNG](https://github.com/user-attachments/assets/cdc64e5b-1a04-4a6d-9b1e-64df04d9a6e8)

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
