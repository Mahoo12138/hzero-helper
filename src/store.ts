const MenuDSFactory = () => ({
  fields: [
    {
      name: 'menuName',
      type: 'string',
      label: '菜单名称',
      required: true,
    },
    {
      name: 'menuPath',
      type: 'string',
      label: '菜单路由',
      required: true,
    },
  ]
})