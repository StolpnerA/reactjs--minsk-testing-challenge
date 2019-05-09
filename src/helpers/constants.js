const PRIORITY_OPTIONS = [
  '',
  'Low',
  'Medium',
  'High',
];

const COLUMNS = ["id", "done", "title", "priority", "date"]

const STORAGE_KEY = 'tasks'

const FILTER_FIELDS = {
  done: 'done',
  date: 'date',
  search: 'search',
}

export {
  PRIORITY_OPTIONS,
  COLUMNS,
  STORAGE_KEY,
  FILTER_FIELDS,
};