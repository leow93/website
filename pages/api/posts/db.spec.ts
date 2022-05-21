import { byDate } from './db';

test('sorting by date ascending', () => {
  const list = ['2022-01-03', '2022-01-02', '2022-01-01'];

  expect(list.sort(byDate((x) => new Date(x)))).toEqual([
    '2022-01-01',
    '2022-01-02',
    '2022-01-03',
  ]);
});

test('sorting by date descending', () => {
  const list = ['2022-01-01', '2022-01-04', '2022-01-02', '2022-01-03'];

  expect(list.sort(byDate((x) => new Date(x), 'desc'))).toEqual([
    '2022-01-04',
    '2022-01-03',
    '2022-01-02',
    '2022-01-01',
  ]);
});
