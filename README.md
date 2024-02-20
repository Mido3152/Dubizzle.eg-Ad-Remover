# Dubizzle.eg Ad Remover

This is my attempt at a browser extension that completely removes paid-for ads from dubizzle.eg, so that all ads are by real, genuine people looking to sell their property.

## Installation

<a href="https://chromewebstore.google.com/detail/dubizzleeg-ad-remover/nnnmpbhndfmpgnnkpmhcnohdamcaillb">
<img src="https://storage.googleapis.com/web-dev-uploads/image/WlD8wC6g8khYWPJUsQceQkhXSlv1/iNEddTyWiMfLSwFD6qGq.png" height="62px"></img>
</a>
<a href="https://addons.mozilla.org/en-US/firefox/addon/dubizzle-eg-ad-remover/">
<img src="https://extensionworkshop.com/assets/img/documentation/publish/get-the-addon-178x60px.dad84b42.png" ></img>
</a>

## Installation (Manual)

- Download the [latest release](https://github.com/Mido3152/Dubizzle.eg-Ad-Remover/releases/).

- Drag the `.zip` file and drop it manually into the extensions page of the browser(Developer Mode might be needed.).

## Building From Source

#### Chrome

- Clone the GitHub repo.
  `git clone https://github.com/Mido3152/Dubizzle.eg-Ad-Remover.git`

  -Go into your browser's extension menu and enable developer mode.

- Either `load unpacked`, or `pack extension` and refer to the Installation section.

#### Firefox

- Go to `about:debugging`.

- Go to the `This Firefox` tab.

- Click on `Load Temporary Add-on..` button.

- Navigate to either the zip file or the source folder and click `Open`.

- Make sure you replace the `manifest.json` with the v2 version for Firefox.
