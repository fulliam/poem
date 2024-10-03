import type { IPoem } from '@/types';

export const Poem = <IPoem>{
  title: 'Invictus',
  author: 'By William Ernest Henley',
  quatrains: [
    {
      lines: [
        'Out of the night that covers me,',
        'Black as the pit from pole to pole,',
        'I thank whatever gods may be',
        'For my unconquerable soul.',
      ],
      visible: true,
    },
    {
      lines: [
        'In the fell clutch of circumstance',
        'I have not winced nor cried aloud.',
        'Under the bludgeonings of chance',
        'My head is bloody, but unbowed.',
      ],
      visible: true,
    },
    {
      lines: [
        'Beyond this place of wrath and tears',
        'Looms but the Horror of the shade,',
        'And yet the menace of the years',
        'Finds and shall find me unafraid.',
      ],
      visible: true,
    },
    {
      lines: [
        'It matters not how strait the gate,',
        'How charged with punishments the scroll,',
        'I am the master of my fate,',
        'I am the captain of my soul.',
      ],
      visible: true,
    },
  ],
};
