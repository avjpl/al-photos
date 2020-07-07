import axios from 'axios';

export const slackAlert = async (payload) => {
  return await axios({
    method: 'post',
    url: 'http://localhost:3800/alert',
    headers: { 'Content-Type': 'application/json' },
    data: { payload }
  });
};
