import { useEffect, useState } from 'react';
import grpc from '@grpc/grpc-js';
import protoLoader from '@grpc/proto-loader';

const PROTO_PATH = './notification.proto';

const packageDefinition = protoLoader.loadSync(PROTO_PATH);
const notificationProto = grpc.loadPackageDefinition(packageDefinition).notification;

const client = new notificationProto.NotificationService('localhost:50051', grpc.credentials.createInsecure());

export default function Grpcclient() {
  const [stockUpdates, setStockUpdates] = useState([]);

  useEffect(() => {
    const call = client.notifyStockChange({});
    call.on('data', (update) => {
      setStockUpdates((prevState) => [...prevState, update]);
    });

    return () => {
      call.cancel();
    };
  }, []);

  return (
    <>h1</>
  );
}

