import { MainLayout } from '../layouts/MainLayout';
import {
  Paper,
  Tab,
  Tabs,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button
} from "@material-ui/core";

import {FollowButton} from "../components/FollowButton";
import {GetServerSideProps, NextPage} from "next";
import {Api} from "../utils/api";
import {ResponseUser} from "../utils/api/types";

type RatingPageProps = {
  users: ResponseUser[]
}

const Rating: NextPage<RatingPageProps> = ({users}) => {
  return (
    <MainLayout >
      <Paper elevation={0} className='pt-20 pl-20 pr-20 mb-20'>
        <Typography variant='h5' style={{fontWeight: 'bold', fontSize: 30, marginBottom: 6 }}>Рейтинг сообществ и блогов</Typography>
        <Typography style={{fontSize: 15}}>Десять лучших авторов и комментариев, а также администраторы
          первых десяти сообществ из рейтинга по итогам месяца бесплатно получат
          Plus-аккаунт на месяц
        </Typography>
        <Tabs className='mt-10' value={0} indicatorColor='primary' textColor='primary'>
          <Tab label='Август'/>
          <Tab label='За 3 месяца'/>
          <Tab label='За все время'/>
        </Tabs>
      </Paper>

      <Paper elevation={0}>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Пользователь</TableCell>
                <TableCell align="right">Рейтинг</TableCell>
                <TableCell align="right" />
              </TableRow>
            </TableHead>
            <TableBody>
              {
                users.map(obj => (
                  <TableRow>
                    <TableCell component="th" scope="row">
                      <span className='mr-15'>{obj.id}</span>{obj.fullName}
                    </TableCell>
                    <TableCell align="right">{obj.commentsCount * 2}</TableCell>
                    <TableCell align="right">
                      <FollowButton />
                    </TableCell>
                  </TableRow>
                ))
              }
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </MainLayout>
  );
}
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const users = await Api(ctx).user.getAll()

    return {
      props: {
        users
      }
    }
  } catch(err) {
    console.warn('Write page',err)
  }

  return {
    props: {
      users: null
    }
  }
}

export default Rating