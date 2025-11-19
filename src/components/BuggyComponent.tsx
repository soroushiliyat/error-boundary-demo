function BuggyComponent() {
    const user: any = null; // 👈 TypeScript رو خاموش می‌کنیم

  return <h1>User name: {user.name}</h1>; // اینجا ارور میده چون user نال هست
}

export default BuggyComponent;
