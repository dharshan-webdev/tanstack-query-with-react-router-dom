const content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lobortis mattis aliquam faucibus purus in massa tempor nec feugiat. Nec dui nunc mattis enim ut tellus. Nulla at volutpat diam ut. Erat pellentesque adipiscing commodo elit. Fringilla ut morbi tincidunt augue interdum velit euismod in. Eleifend quam adipiscing vitae proin sagittis nisl. Eget nullam non nisi est. Interdum consectetur libero id faucibus nisl tincidunt eget nullam non. Cursus risus at ultrices mi tempus imperdiet. Lectus sit amet est placerat. Sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus. Penatibus et magnis dis parturient montes nascetur. Senectus et netus et malesuada fames ac turpis egestas. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas. Etiam erat velit scelerisque in. Malesuada proin libero nunc consequat interdum. Purus ut faucibus pulvinar elementum integer enim neque.

Consequat nisl vel pretium lectus quam. Sit amet cursus sit amet dictum. Ornare arcu dui vivamus arcu felis bibendum ut tristique et. Morbi blandit cursus risus at ultrices mi tempus. Elit pellentesque habitant morbi tristique senectus et. Leo duis ut diam quam nulla porttitor. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Viverra ipsum nunc aliquet bibendum enim facilisis gravida. Scelerisque in dictum non consectetur a erat nam at. Auctor urna nunc id cursus metus aliquam eleifend. Sem integer vitae justo eget magna fermentum.`

export const blogs: {
  id: string
  title: string
  category: string
  description: string
  content: string
}[] = [
  {
    id: 'f17c03e0-3f5c-4b61-99b6-efcc347dfe52',
    title: 'Understanding JavaScript Closures',
    category: 'JavaScript',
    description:
      'An in-depth look at closures in JavaScript and how to use them effectively.',
    content,
  },
  {
    id: '7bcbcad1-c469-419e-a0f8-fabed6cf153b',
    title: 'A Guide to Responsive Web Design',
    category: 'Web Design',
    description:
      'Learn the principles and techniques of responsive web design to create websites that look great on all devices.',
    content,
  },
  {
    id: '0e332425-b4f3-4887-b924-35bd10de44be',
    title: 'Exploring Python Decorators',
    category: 'Python',
    description:
      'Discover the power of decorators in Python and how they can be used to modify the behavior of functions.',
    content,
  },
  {
    id: 'd5be6ade-be0f-4588-b474-aa9381f7f669',
    title: 'Mastering CSS Grid Layout',
    category: 'CSS',
    description:
      'A comprehensive guide to CSS Grid Layout, a powerful layout system available in CSS.',
    content,
  },
  {
    id: 'c5ac15e4-8806-4fcc-b75a-53e341693da7',
    title: 'Building RESTful APIs with Node.js',
    category: 'Node.js',
    description:
      'Learn how to build scalable and efficient RESTful APIs using Node.js and Express.',
    content,
  },
]
