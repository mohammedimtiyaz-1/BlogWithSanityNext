export default {
  name: 'comment',
  title: 'Comment',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'comments',
      title: 'Comments',
      type: 'text',
    },
    {
      name: 'approved',
      title: 'Approved',
      type: 'boolean',
      description: "Won't display this comment, without Approval",
    },
    {
      name: 'post',
      type: 'reference',
      to: [{ type: 'post' }],
    },
  ],
}
