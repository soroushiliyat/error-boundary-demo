function BuggyComponent() {
    const user: any = null; // 👈 TypeScript رو خاموش می‌کنیم

  return <h1>نام کاربر: {user.name}</h1>; // اینجا ارور میده چون user نال هست
}

export default BuggyComponent;
