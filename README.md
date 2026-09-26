# Shopifyphone — premium pre-owned Apple theme

Shopify Online Store 2.0 theme, gebouwd volgens de structuur in `layout/`, `templates/`,
`sections/`, `snippets/`, `assets/`, `config/` en `locales/`.

Design-richting: witruimte, navy-accenten, groene CTA's, strakke productcards —
geïnspireerd op de UX-structuur van bestbuyphone.nl en phonesy.store (geen letterlijke
kopie van branding, teksten of foto's).

## Lokaal draaien

Dit is een cloud-sessie en kan geen interactieve Shopify-login of `shopify theme dev`
uitvoeren. Twee manieren om verder te gaan:

1. **Shopify Admin → GitHub-koppeling** (geen CLI nodig):
   Online Store → Themes → Add theme → Connect from GitHub → kies deze repo/branch.
   Elke push hierheen update automatisch dat (unpublished) theme.

2. **Lokaal met Shopify CLI**:
   ```
   shopify theme dev --store JOUW-STORE.myshopify.com
   ```

## Benodigde metafields (namespace `custom`)

Maak deze aan in Shopify Admin → Settings → Custom data → Products, als ze nog niet bestaan:

| Metafield key           | Type                 | Gebruikt voor              |
|-------------------------|----------------------|-----------------------------|
| `custom.device_model`   | Single line text     | bv. "iPhone 13 Pro"         |
| `custom.storage`        | Single line text     | bv. "128GB"                 |
| `custom.color`          | Single line text     | bv. "Sierra Blue"           |
| `custom.condition`      | Single line text     | bv. "A – Zo goed als nieuw" |
| `custom.battery_health` | Integer              | bv. 92 (%)                  |
| `custom.warranty`       | Single line text     | bv. "12 maanden garantie"   |

`imei` bewust NIET als publiek metafield — indien nodig alleen intern (order note /
private metafield), nooit tonen op de storefront.

## Wat is er gebouwd

- Header met logo, navigatie, zoeken, account, cart + mobiel hamburgermenu
- Announcement bar (beheerbaar)
- Hero (beheerbaar via blocks/settings)
- USP-balk (4 beheerbare USP's)
- "Nieuw binnen" productsectie met metafield-badges op de productcard
- Categorieblokken gekoppeld aan echte Shopify collections
- Reviews-sectie (score, sterren, meerdere reviews, beheerbaar)
- "Waarom wij" donkere sectie (afbeelding + tekst + CTA)
- Nieuwsbrief-sectie via Shopify's customer form
- Footer met meerdere kolommen, betaalmethoden, social links
- Productpagina: gallery + thumbnails, prijs, voorraad, metafield-info, sticky
  mobiele add-to-cart, accordions (omschrijving/conditie/batterij/verzending/garantie/retour/FAQ)
- Collectiepagina met native Shopify-filtering (model, prijs, opslag, kleur, conditie,
  beschikbaarheid) en responsive grid (4/2-3/1-2)
- Cart-pagina met foto, variant, prijs, aantal, verwijderen, subtotal, checkout

## Nooit gedaan (per instructie)

Geen `theme publish`, geen wijzigingen aan bestellingen/klanten/instellingen, geen
verwijderde producten/collecties, geen API secrets gecommit.
