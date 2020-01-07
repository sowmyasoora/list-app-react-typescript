import  * as React from 'react';
import AddOption from './AddOption';
import Action from './Action';
import Header from './Header';
import Options from './Options';

export default class App extends React.Component<any, any> {
  state : any = {
    options: []
  };

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  }
  handleDeleteOption = (optionToRemove: any) => {
    this.setState((prevState : any) => ({
      options: prevState.options.filter((option: any) => optionToRemove !== option.option)
    }));
  }
  handlePick = () =>{
    const unPickedOptions : any = this.state.options.filter((option : any) => {
      return !option.isPicked
    });
    console.log(unPickedOptions);
    if(unPickedOptions.length > 0 ) {
      const randomNum = Math.floor(Math.random() * unPickedOptions.length);
      const pickedOption = unPickedOptions[randomNum].option;
      const pickedOptionIndex = this.state.options.findIndex((option: any) => {
        return option.option === pickedOption;
      } )
      this.state.options[pickedOptionIndex].isPicked = true;
      // console.log(this.state.options);
      alert("You have picked option : " + pickedOption);
    } else {
       alert("Sorry! you have picked all options")
     }
  }

  handleAddOption = (optionToAdd: any) => {
    if (!optionToAdd) {
      return 'Enter valid value to add item';
    } else {

      const pickedOptionIndex = this.state.options.findIndex((option: any) => {
        return option.option === optionToAdd;
      } );

      if (pickedOptionIndex > -1) {
        return 'This option already exists';
      }
    }

    this.setState((prevState: any) => ({
      options: prevState.options.concat([{option : optionToAdd, isPicked : false}])
    }));

  }
  render() {
    return (
      <div>
        <Header />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }
}
