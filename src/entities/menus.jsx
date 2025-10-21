const getImageUrl = (name) => {
  return new URL(`/src/assets/img/${name}`, import.meta.url).href
}

export const kluuvi_menu = {
    menu : [getImageUrl('kluuvi_lunch_menu.jpg'),getImageUrl('kluuvi_menu.jpg')]
}

export const kamppi_menu = {
    menu : [getImageUrl('kamppi_menu.jpg')]
}
