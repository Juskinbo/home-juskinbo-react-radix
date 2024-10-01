import WeChatLogo from '../assets/wechat.svg'
import WeChatCode from '../assets/wechat-code.jpg'
import TwitterLogo from '../assets/twitter.svg'
import GitHubLogo from '../assets/github.svg'
import TelegramLogo from '../assets/telegram.svg'

export const appBentosProps = [
  {
    buttonColor: '#000',
    buttonText: 'Follow',
    className: 'size-40 bg-slate-50',
    content: '@Juskinbo',
    icon: GitHubLogo,
    link: 'https://github.com/Juskinbo',
    title: 'GitHub',
    type: 'link',
  },
  {
    buttonColor: '#56acee',
    buttonText: 'Follow',
    className: 'size-40 bg-blue-50',
    content: '@Juskinbo0326',
    icon: TwitterLogo,
    link: 'https://twitter.com/Juskinbo0326',
    title: 'Twitter',
    type: 'link',
  },
  {
    buttonColor: '#2ea4dc',
    buttonText: 'Send',
    className: 'size-40 bg-sky-50',
    content: '@Juskinbo0326',
    icon: TelegramLogo,
    link: 'https://t.me/Juskinbo0326',
    title: 'Telegram',
    type: 'link',
  },
  {
    buttonColor: '#00d432',
    buttonText: 'Get',
    className: 'size-40 bg-green-50',
    codeSrc: WeChatCode,
    content: '@Juskinbo',
    icon: WeChatLogo,
    title: 'WeChat',
    type: 'code',
  },
]
