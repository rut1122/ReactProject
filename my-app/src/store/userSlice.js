// ... הקוד של ה-createSlice למעלה ...

// 1. ייצוא הפעולות (בשביל ה-Dispatch בקומפוננטות)
export const { login, logout } = userSlice.actions;

// 2. השורה הקריטית שחסרה לך (בשביל ה-Store):
export default userSlice.reducer;
