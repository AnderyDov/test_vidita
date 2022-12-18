export default function LinlToGithub() {
  const out = (
    <div className='overflow-x-auto w-full'>
      <table className='table w-full'>
        <thead>
          <tr>
            <th>
              <label>
                <input type='checkbox' className='checkbox' />
              </label>
            </th>
            <th>Название</th>
            <th>Цена</th>
            <th>Колличество</th>
            <th>Объём</th>
            <th>Статус</th>
            <th>Дата доставки</th>
            <th>Всего</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>
              <label>
                <input type='checkbox' className='checkbox' />
              </label>
            </th>
            <td className='font-bold'>Молоко</td>
            <td>
              12 <span className='badge badge-ghost badge-sm'>р</span>
            </td>
            <td>
              30 <span className='badge badge-ghost badge-sm'>шт</span>
            </td>
            <td>
              5 <span className='badge badge-ghost badge-sm'>л</span>
            </td>
            <td>
              <span className='badge badge-ghost badge-sm'>активное</span>
            </td>
            <td>2022.12.13</td>
            <td>360 rub</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th>Общее колличество:</th>
            <th>Общий объём:</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  );

  return out;
}
