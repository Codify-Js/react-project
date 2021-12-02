export const productsList = () => {
    const list = [];
    for (let i = 0; i < 20; i++) {
      list.push(
        {
          id: i + 1,
          title: `product ${i + 1}`,
          description: 'Some description',
          date: '01/01/2021'
        },
      )
    }
    return list;
  }