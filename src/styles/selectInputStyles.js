export default {
    container: (base) => ({
        ...base,
        marginBottom: 30
    }),

    menu: () => ({
        width: '100%',
        textAlign: 'left',
        backgroundColor: '#FDF8F4'
    }),
  
    control: () => ({
        backgroundColor: '#FDF8F4',
        display: 'flex',
        justifyContent: 'space-between',
        color: '#FDF8F4',
        height: 70,
        padding: 20,
        alignItems: 'center'
    }),

    input: () => ({
        color: '#333C39' 
    }),

    singleValue: () => ({
        color: '#333C39'
    }),

    placeholder: () => ({
        color: '#333C39'
    }),

    indicatorsContainer: () => ({
        display: 'none'
    }),

    menuList: () => ({
        position: 'absolute',
        backgroundColor: '#FDF8F4',
        width: '100%',
        zIndex: '1000',
        top: 65
    }),

    option: (provided, state) => ({
        backgroundColor: state.isFocused ? '#c7c7c7' : 'transparent',
        padding: 20
    })
  }