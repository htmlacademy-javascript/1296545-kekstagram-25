const GET_DATA_API = 'https://25.javascript.pages.academy/kekstagram/data';
const SEND_DATA_API = 'https://25.javascript.pages.academy/kekstagram';

export const getData = (onSuccess, onError) => fetch(GET_DATA_API)
  .then((response) => {
    if (response.ok) {
      return response.json();
    }

    throw new Error(`${response.status} ${response.statusText}`);
  })
  .then((data) => {
    onSuccess(data);
  })
  .catch((err) => {
    onError(err);
  });


export const sendData = (onSuccess, onFail, body) => {
  fetch(
    SEND_DATA_API,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
};
