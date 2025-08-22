export const HttpErrorHandler = (error: any) => {
    const { response } = error ?? {};

    if (error.message === 'CANCEL') return {};

    if (response) {
        const { data = {}, status = 500 } = response;
        return {
            ...data,
            status,
        };
    }
    return {
        error: 'Internal Server Error',
        status: 500,
    };
};
