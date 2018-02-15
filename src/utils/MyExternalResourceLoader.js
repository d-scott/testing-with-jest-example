import request from 'superagent';

class MyExternalResourceLoader {
    static loadSomething(url) {
        return new Promise((resolve, reject) => {
            request
                .get(url)
                .end((error, result) => {
                    if (error) {
                        reject(error);
                    }

                    resolve(result.body);
                });
        });
    }
}

export default MyExternalResourceLoader;
