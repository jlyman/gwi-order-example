import React, { Component } from 'react';
import FormField from '../common/FormField';
import FormDropdown from '../common/FormDropdown';
import FormYesNoDropdown from '../common/FormYesNoDropdown';
import { MoveType } from '../../constants';

class NewOrder extends Component {
  render() {
    return (
      <div>
        <FormDropdown
          fieldName="moveType"
          labelText="Move Type"
          choices={[
            { value: MoveType.export.toString(), text: 'Export' },
            { value: MoveType.import.toString(), text: 'Import' },
            { value: MoveType.domestic.toString(), text: 'Domestic' },
            { value: MoveType.inbound.toString(), text: 'Inbound' },
            { value: MoveType.outbound.toString(), text: 'Outbound' },
            { value: MoveType.railToPort.toString(), text: 'Rail to Port' },
            { value: MoveType.repo.toString(), text: 'Repo' },
          ]}
        />
        <FormField fieldName="refNo" labelText="Bkg/BOL/Ref No" />
        <FormField fieldName="equipmentNo" labelText="Equipment No" />
        <FormField fieldName="billTo" labelText="Bill To" />
        <FormField fieldName="customer" labelText="Customer" />
        <FormYesNoDropdown fieldName="useTemplate" labelText="Use Template" />
        <FormField fieldName="deliverToFilter" labelText="Deliver To Filter" />
      </div>
    );
  }
}

export default NewOrder;
