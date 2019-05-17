const PRIORITY_OPTIONS = [
  '',
  'Low',
  'Medium',
  'High',
];

const COLUMNS = ["id", "title", "priority", "date (dd.mm.yyyy)"]

const STORAGE_KEY = 'tasks'

const FILTER_FIELDS = {
  done: 'done',
  date: 'date',
  search: 'search',
}

const MIN_SEARCH_CHARS = 3;

export {
  PRIORITY_OPTIONS,
  COLUMNS,
  STORAGE_KEY,
  FILTER_FIELDS,
  MIN_SEARCH_CHARS,
};