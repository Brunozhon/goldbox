# Gold Box Scripts

## jsDelivr

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Title</title>
    <script src="https://cdn.jsdelivr.net/gh/Brunozhon/goldbox@v1.0/scripts/GoldBeast.mjs" type="module"></script>
    <script src="https://cdn.jsdelivr.net/gh/Brunozhon/goldbox@v1.0/scripts/Hut.mjs" type="module"></script>
    <script src="https://cdn.jsdelivr.net/gh/Brunozhon/goldbox@v1.0/scripts/Monster.mjs" type="module"></script>
    <script src="https://cdn.jsdelivr.net/gh/Brunozhon/goldbox@v1.0/scripts/Place.mjs" type="module"></script>
    <script nomodule defer>
      class Place {
        constructor(name, background_URL, props, props_URLs, backgroundGetterMethod) {
          this.name = name;
          this.backgroundURL = background_URL;
          this.propsURLs = props_URLs;
          this.props = props;
          this.backgroundGetterMethod = backgroundGetterMethod;
        }
        switchBackgroundURL(url) {
          this.backgroundURL = url;
        }
        get background() {
          return this.backgroundGetterMethod(this.backgroundURL);
        }
      }
      class Monster {
        constructor(name, hp, max_hp) {
          this.name = name;
          this.hp = hp;
          this.max_hp = max_hp;
        }
        takeDamage(damage) {
          this.hp = this.hp - damage;
        }
        get isDead() {
          if (this.hp <= 0) {
            return true;
          } else {
            return false;
          }
        }
      }
    </script>
    <script defer>
      var goldBeast = GoldBeast()
      var hut = Hut()
      var someMonster = Monster("Demo monster", 100, 1_000)
      var somePlace = Place("Demo place", "path/to/background.txt", ["demo prop"], ["path/to/demo/prop.txt"], function() { ... })
    </script>
  </head>
  <body>
    ...
  </body>
</html>
```
