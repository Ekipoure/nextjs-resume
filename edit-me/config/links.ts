import {  
  SiGithub,
  SiInstagram,  
  SiTelegram,
  SiMailboxdotorg
} from '@icons-pack/react-simple-icons';
import { CMSLink } from 'edit-me/types/cms-link';
import { Telemetry } from 'next/dist/telemetry/storage';

export const links: CMSLink[] = [
  {
    href: 'https://github.com/ekipoure',
    icon: SiGithub,
    title: 'GitHub',
  },
  {
    href: 'https://t.me/ekipoure',
    icon: SiTelegram,
    title: 'Telegram',
  },
  {
    href: 'https://www.instagram.com/ekipoure',
    icon: SiInstagram,
    title: 'Instagram',
  },
  {
    href: 'mailto:ekipoure@gmail.com',
    icon: SiMailboxdotorg,
    title: 'Email',
  }
];
