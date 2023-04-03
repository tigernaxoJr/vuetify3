export default
[
    { id:'00', title: "首頁", prependIcon: "mdi-home", to:"/" },
    { id:'0A', title: "搜尋", prependIcon: "mdi-home", to:"/Search" },
    {
      id: '01',
      title: "第一層目錄A",
      prependIcon: "",
      children: [
        { id:'011', title: "Management", prependIcon: "mdi-account-multiple-outline" },
        { id:'012', title: "Settings", prependIcon: "mdi-cog-outline" },
      ],
    },
    {
      id: '02',
      title: "第一層目錄B",
      prependIcon: "",
      children: [
        {id: '021', title: "第二層目錄", prependIcon: "mdi-plus-outline" ,
          children: [
            {id: '0211', title: "第三層物件", prependIcon: "mdi-plus-outline" },
            {id: '0212', title: "第三層物件", prependIcon: "mdi-file-outline" },
            {id: '0213', title: "第三層物件", prependIcon: "mdi-update" },
            {id: '0214', title: "第三層物件", prependIcon: "mdi-delete", href: "https://google.com" },
          ]
        },
        {id: '022', title: "第二層物件", prependIcon: "mdi-file-outline" },
        {id: '023', title: "第二層物件", prependIcon: "mdi-update" },
        {id: '024', title: "第二層物件", prependIcon: "mdi-delete", href: "https://google.com" },
      ],
    },
    {id: '03', title: "第一層物件", prependIcon: "mdi-delete", href: "https://google.com" },
  ]

