import { createSelector } from "reselect"
export const selectTask = state =>  state.tasks.tasks
export const selectFilter = state => state.tasks.filter;
export const selecteFilterTask = createSelector(
 [selectTask , selectFilter],
 (tasks, filter) => {
   return tasks.filter(t => String(t.text  || "").toLowerCase().includes(filter.toLowerCase()))
 }
)