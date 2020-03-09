---
sidebar: true
---


# Vuepress Tips

## Custom Page Class
>This article is copied from vuepress main site [here](https://v1.vuepress.vuejs.org/theme/default-theme-config.html#custom-page-class)


Sometimes, you may need to add a unique class for a specific page so that you can target content on that page only in custom CSS. You can add a class to the theme container div with pageClass in ` YAML front matter`

```
---
pageClass: custom-page-class
---
```
Then you can write CSS targeting that page only in `./vuepress/styles/index.styl.`
```

.theme-container.custom-page-class {
  /* page-specific rules */
}
```

::: tip Note

These styles are written in index.styl, a file that allows you to conveniently add extra styles or override existing ones for the default theme.
:::
