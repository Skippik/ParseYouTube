import React, {useContext} from 'react';
import 'antd/dist/antd.less';
import '../src/pages/main.less';
import CommonStore from './store/CommonStore';
import {Provider} from 'mobx-react';
import {BrowserRouter} from 'react-router-dom';
import {ConfigProvider} from 'antd';
import Main from './pages/main';

function App() {
  //
  const storeCommon = useContext(CommonStore);

  return (
    <Provider storeCommon={storeCommon}>
      <BrowserRouter>
        <ConfigProvider>
          <Main />
        </ConfigProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
