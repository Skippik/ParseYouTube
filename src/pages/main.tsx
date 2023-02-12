import {
  Button,
  Col,
  Divider,
  Input,
  Modal,
  notification,
  Pagination,
  Radio,
  Row,
  Spin,
  Typography,
} from 'antd';
import axios from 'axios';
import {useEffect, useState} from 'react';

//
const {Title} = Typography;

const Main = () => {
  const [searchOne, setSearchOne] = useState('');
  const [searchTwo, setSearchTwo] = useState('');
  const [data, setData] = useState([]);
  const [perPage, setPerPage] = useState(10);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  const serarch = async () => {
    if (!!searchOne.length || !!searchTwo.length) {
      setLoading(true);

      await axios
        .get(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${
            searchOne + ' ' + searchTwo
          }&maxResults=${perPage}&page=${page}&type=video&limit=25&safeSearch=strict&key=${
            process.env.REACT_APP_YOUTUBE_API_KEY
          }`,
        )
        .then(response => {
          response.data['items'].forEach((item: any) => {
            if (
              item.snippet.description.includes(searchTwo) ||
              item.snippet.description.includes(searchOne)
            ) {
              setData(response.data['items']);
              setTotal(response.data.pageInfo.totalResults);
            }
          });

          setLoading(false);
        })
        .catch(error => {
          console.log(error);
          // setIsError(true);
          // setIsLoading(false);
        });
    }
  };

  useEffect(() => {
    serarch();
  }, [page, perPage]);

  useEffect(() => {
    setData([]);
  }, []);

  return (
    <Row className='s-main' id='s-main'>
      <Col className='s-main__wrapper'>
        <Title>Parser YouTube</Title>
        <Divider />
        <div className='s-main__input-wrapper'>
          <>
            <Row gutter={[10, 10]}>
              <Col span={12}>
                <Input
                  value={searchOne || ''}
                  allowClear={true}
                  onChange={value => {
                    setSearchOne(value.target.value);
                  }}
                  className='s-main__input'
                  placeholder={'Search 1'}
                />
              </Col>
              <Col span={12}>
                <Input
                  value={searchTwo || ''}
                  allowClear={true}
                  onChange={value => {
                    setSearchTwo(value.target.value);
                  }}
                  className='s-main__input'
                  placeholder={'Search 1'}
                />
              </Col>
            </Row>
            <Button
              type='primary'
              onClick={() => {
                serarch();
              }}
              className='s-main__btn'>
              {'Search!'}
            </Button>

            {loading && <Spin />}

            <div className='wrapper-items'>
              {data.length ? (
                <>
                  {data.map((item: any, key) => (
                    <a
                      target='_blank'
                      href={`https://www.youtube.com/watch?v=${item.id.videoId}`}
                      key={key}
                      rel='noreferrer'>
                      <div>{`Channel Name: ${item.snippet.channelTitle}`}</div>
                      <div>{`Video title: ${item.snippet.title}`}</div>
                      <div>{`Video Description: ${item.snippet.description}`}</div>
                    </a>
                  ))}
                </>
              ) : (
                <span>{'Search result empty'}</span>
              )}
            </div>
            {!!data.length && (
              <Pagination
                className='b-pagination'
                onChange={(newPage, pageSize) => {
                  setPage(newPage);
                  if (pageSize) {
                    setPerPage(pageSize);
                  }
                }}
                total={total}
                current={page}
                pageSize={perPage}
              />
            )}
          </>
        </div>
      </Col>
    </Row>
  );
};

export default Main;
