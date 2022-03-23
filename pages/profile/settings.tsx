import {MainLayout} from "../../layouts/MainLayout";
import {Button, Divider, Paper, TextField, Typography} from "@material-ui/core";

export default function Settings() {
  return(
    <MainLayout contentFullWidth hideComments>
      <Paper className='p-20' elevation={0}>
        <Typography variant='h6'>Овновные настройки</Typography>
        <Divider className='mt-20 mb-30' />
        <form>
          <TextField
            className="mb-20"
            size="small"
            label="Никнейм"
            variant="outlined"
            fullWidth
            required
          />
          <TextField
            className="mb-20"
            size="small"
            label="Эл. почта"
            variant="outlined"
            fullWidth
            required
          />
          <TextField
            className="mb-20"
            size="small"
            label="Пароль"
            variant="outlined"
            fullWidth
            required
          />
          <Divider  className='mb-20 mt-30'/>
          <Button color='primary' variant='contained'>Сохранить изменения</Button>
        </form>
      </Paper>
    </MainLayout>
  )
}