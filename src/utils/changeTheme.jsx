const themes = ['default', 'light', 'dark']

export default function changeTheme(theme, setTheme) {
  const newTheme = themes.includes(theme) ? theme : 'default'
  localStorage.setItem('theme', newTheme)
  setTheme(newTheme)
}
