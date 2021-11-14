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
      alert("Sorry, user. Gold Box scripts require module support.")
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

## Download

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Title</title>
    <script src="path/to/GoldBeast.mjs" type="module"></script>
    <script src="path/to/Hut.mjs" type="module"></script>
    <script src="path/to/Monster.mjs" type="module"></script>
    <script src="path/to/Place.mjs" type="module"></script>
    <script nomodule defer>
      alert("Sorry, user. Gold Box scripts require module support.")
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

or

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Title</title>
    <script type="module">
      import { GoldBeast } from 'path/to/GoldBeast.mjs'
      import { Hut } from 'path/to/Hut.mjs'
      import { Monster } from 'path/to/Monster.mjs'
      import { Place } from 'path/to/Place.mjs'
      var goldBeast = GoldBeast()
      var hut = Hut()
      var someMonster = Monster("Demo monster", 100, 1_000)
      var somePlace = Place("Demo place", "path/to/background.txt", ["demo prop"], ["path/to/demo/prop.txt"], function() { ... })
    </script>
    <script nomodule defer>
      alert("Sorry, user. Gold Box scripts require module support.")
    </script>
  </head>
  <body>
    ...
  </body>
</html>
```
