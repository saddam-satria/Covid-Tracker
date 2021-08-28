import formStyle from './forminput.module.css';
import { Form, Label, Input, FormGroup } from 'reactstrap';
import Loaders from '../loaders/Loaders';

const FormInputCountriesGroupe = ({ data, loading, handler, handleInput }) => {
  return (
    <div className={formStyle.FormInput}>
      <Form>
        <div className={formStyle.container}>
          <FormGroup>
            {loading && <Loaders />}
            {!loading && (
              <>
                <Label>Select Countries</Label>
                <Input type="select" name="select" onChange={(e) => handler(e.target.value)}>
                  {data.length
                    ? data[0].countries.map((countries) => {
                        return (
                          <>
                            <option value={countries.name}>{countries.name}</option>
                          </>
                        );
                      })
                    : null}
                </Input>
              </>
            )}
          </FormGroup>

          <FormGroup className={formStyle.search}>
            <Label></Label>
            <Input onChange={(e) => handleInput(e.target.value)} type="text" name="search" placeholder="Search province state" />
          </FormGroup>
        </div>
      </Form>
    </div>
  );
};

export default FormInputCountriesGroupe;
