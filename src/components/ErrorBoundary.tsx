import React from 'react';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: unknown, info: unknown) {
    console.error("خطای گرفته‌شده:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '2rem', color: 'red', textAlign: 'center' }}>
          <h2>😢 اوه نه! یه مشکلی پیش اومده.</h2>
          <p>لطفاً صفحه رو رفرش کن یا بعداً امتحان کن.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;