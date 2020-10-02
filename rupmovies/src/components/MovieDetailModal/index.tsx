import * as React from 'react';
import { Modal, Button } from 'antd';
import { Movie } from '../../pages/Home';

interface IAppProps {
  visible: boolean;
}

interface OnCancelProps {}

const App: React.FunctionComponent<any> = (props) => {
  return (
    <Modal
      visible={props.visible}
      centered
      width={800}
      footer={[<Button onClick={props.onCancel}>Fechar</Button>]}
      onCancel={props.onCancel}
    >
      <p>Oi</p>
    </Modal>
  );
};

export default App;
