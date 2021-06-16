import React, { ErrorInfo } from "react";

interface State {
    hasError: boolean;
    error?: Error;
}

export class ErrorBoundary extends React.Component<unknown, State> {
    constructor(props: unknown) {
        super(props);
        this.state = {
            hasError: false,
        };
    }

    static getDerivedStateFromError(error: Error): State {
        return {
            hasError: true,
            error,
        };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.error("componentDidCatch", { error, errorInfo });
    }

    render(): React.ReactNode {
        if (this.state.hasError) {
            return <h1>Something went wrong.</h1>;
        }
        return this.props.children;
    }
}
