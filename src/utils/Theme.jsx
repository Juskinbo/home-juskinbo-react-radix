const themes = ['default', 'light', 'dark']

export function changeTheme(theme, setTheme) {
  const newTheme = themes.includes(theme) ? theme : 'default'
  localStorage.setItem('theme', newTheme)
  setTheme(newTheme)
}

export function identifyTheme(theme) {
  if (theme === 'default') {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)')
    return isDark.matches ? 'dark' : 'light'
  } else {
    return theme
  }
}
