/*
    The following code manages the price tool logic. 
    
    The defininng category and service data region will change the price, name, description, or header of each service. 

    The category button functionalityregion is in charge of displaying the correct service info depending on the selected category

    The price functionality region is incharge of updating the price container and the service quantity's
*/
//#region Defining category function constructer
    function Service(initial){
        if(initial){
            this.name = initial.name;
            this.descriptionHeader = initial.descriptionHeader;
            this.description = initial.description;
            this.quantity = initial.quantity;
            this.price = initial.price;
            this.onPress = initial.onPress;
        }
        this.getName = () => {
            return this.name;
        }
        this.setName = (name) => {
            this.name = name;
        }
        this.getDescriptionHeader = () => {
            return this.descriptionHeader;
        }
        this.setDescriptionHeader = (descriptionHeader) => {
            this.descriptionHeader = descriptionHeader;
        }
        this.getDescription = () => {
            return this.description;
        }
        this.setDescription = (description) => {
            this.description = description;
        }
        this.getQuantity = () => {
            return this.quantity;
        }
        this.setQuantity = (quantity) => {
            this.quantity = quantity
        }
        this.getPrice = () => {
            return this.price;
        }
        this.setPrice = (price) => {
            this.price = price;
        }
        //Consider removing onPress Functions
        this.runOnPress = () => {
            this.onPress();
        }
        this.setOnPress = (onPress) => {
            this.onPress = onPress;
        }
    }
    function Category(initial){
        if(initial){
            this.name = initial.name;
            this.services = initial.services;
        }
        this.getName = () => {
            return this.name;
        }
        this.setName = (name) => {
            this.name = name;
        }
        this.getAllServices = () => {
            return this.services;
        }
        this.setAllServices = (allServices) => {
            this.services = allServices;
        }
        this.getService = (i) => {
            return this.services[i];
        }
        this.setService = (service, i) => {
            this.services[i] = service;
        }
    }
//#endregion
//#region Defining category and service data
    var allCategorys = [];
    var wallCeilingCoveringCategory = new Category({
        name: 'Wall / Ceiling Covering',
        services: [
            new Service({
                name: 'Wall / Ceiling Covering item placeholder 01',
                descriptionHeader: 'Ceiling Repair',
                description: 'Vestibulum imperdiet consequat hendrerit. Nunc tortor risus, facilisis efficitur elit ut, malesuada lobortis erat. Quisque laoreet interdum elementum. Sed eget sagittis sem.',
                quantity: 0,
                price: 60
            }),
            new Service({
                name: 'Wall item 02',
                descriptionHeader: 'Ceiling Repair',
                description: 'Vestibulum imperdiet consequat hendrerit. Nunc tortor risus, facilisis.',
                quantity: 0,
                price: 60
            }),
            new Service({
                name: 'Wall / Ceiling Covering item placeholder 03',
                descriptionHeader: 'Ceiling Repair',
                description: 'Vestibulum imperdiet consequat hendrerit. Nunc tortor risus, facilisis efficitur elit ut, malesuada lobortis erat. Quisque laoreet interdum elementum. Sed eget sagittis sem.',
                quantity: 0,
                price: 60
            }),
            new Service({
                name: 'Wall / Ceiling Covering item placeholder 04',
                descriptionHeader: 'Ceiling Repair',
                description: 'Vestibulum imperdiet consequat hendrerit. Nunc tortor risus, facilisis efficitur elit ut, malesuada lobortis erat. Quisque laoreet interdum elementum. Sed eget sagittis sem.',
                quantity: 0,
                price: 60
            }),
            new Service({
                name: 'Wall / Ceiling Covering item placeholder 05',
                descriptionHeader: 'Ceiling Repair',
                description: 'Vestibulum imperdiet consequat hendrerit. Nunc tortor risus, facilisis efficitur elit ut, malesuada lobortis erat. Quisque laoreet interdum elementum. Sed eget sagittis sem.',
                quantity: 0,
                price: 60
            }),
            new Service({
                name: 'Wall / Ceiling Covering item placeholder 06',
                descriptionHeader: 'Ceiling Repair',
                description: 'Vestibulum imperdiet consequat hendrerit. Nunc tortor risus, facilisis efficitur elit ut, malesuada lobortis erat. Quisque laoreet interdum elementum. Sed eget sagittis sem.',
                quantity: 0,
                price: 60
            }),
            new Service({
                name: 'Wall / Ceiling Covering item placeholder 07',
                descriptionHeader: 'Ceiling Repair',
                description: 'Vestibulum imperdiet consequat hendrerit. Nunc tortor risus, facilisis efficitur elit ut, malesuada lobortis erat. Quisque laoreet interdum elementum. Sed eget sagittis sem.',
                quantity: 0,
                price: 60
            }),
            new Service({
                name: 'Wall / Ceiling Covering item placeholder 08',
                descriptionHeader: 'Ceiling Repair',
                description: 'Vestibulum imperdiet consequat hendrerit. Nunc tortor risus, facilisis efficitur elit ut, malesuada lobortis erat. Quisque laoreet interdum elementum. Sed eget sagittis sem.',
                quantity: 0,
                price: 60
            })
        ],
    })
    var carpentryCategory = new Category({
        name: 'Carpentry',
        services: [
            new Service({
                name: 'Carpentry item placeholder 01',
                descriptionHeader: 'Carpentry Repair',
                description: 'Vestibulum imperdiet consequat hendrerit. Nunc tortor risus, facilisis efficitur elit ut, malesuada lobortis erat. Quisque laoreet interdum elementum. Sed eget sagittis sem.',
                quantity: 0,
                price: 250
            }),
            new Service({
                name: 'Carpentry item placeholder 02',
                descriptionHeader: 'Carpentry Repair',
                description: 'Vestibulum imperdiet consequat hendrerit. Nunc tortor risus, facilisis efficitur elit ut, malesuada lobortis erat. Quisque laoreet interdum elementum. Sed eget sagittis sem.',
                quantity: 0,
                price: 250
            }),
            new Service({
                name: 'Carpentry item placeholder 03',
                descriptionHeader: 'Carpentry Repair',
                description: 'Vestibulum imperdiet consequat hendrerit. Nunc tortor risus, facilisis efficitur elit ut, malesuada lobortis erat. Quisque laoreet interdum elementum. Sed eget sagittis sem.',
                quantity: 0,
                price: 200
            }),
            new Service({
                name: 'Carpentry item placeholder 04',
                descriptionHeader: 'Carpentry Repair',
                description: 'Vestibulum imperdiet consequat hendrerit. Nunc tortor risus, facilisis efficitur elit ut, malesuada lobortis erat. Quisque laoreet interdum elementum. Sed eget sagittis sem.',
                quantity: 0,
                price: 650
            })
        ]
    });
    var plasterboardInsulationCategory = new Category({
        name: 'Plasterboard insulation',
        services: [
            new Service({
                name: 'Plasterboard insulation item placeholder 01',
                descriptionHeader: 'Plasterboard Repair',
                description: 'Vestibulum imperdiet consequat hendrerit. Nunc tortor risus, facilisis efficitur elit ut, malesuada lobortis erat. Quisque laoreet interdum elementum. Sed eget sagittis sem.',
                quantity: 0,
                price: 140
            }),
            new Service({
                name: 'Plasterboard insulation item placeholder 02',
                descriptionHeader: 'Plasterboard Repair',
                description: 'Vestibulum imperdiet consequat hendrerit. Nunc tortor risus, facilisis efficitur elit ut, malesuada lobortis erat. Quisque laoreet interdum elementum. Sed eget sagittis sem.',
                quantity: 0,
                price: 50
            }),
            new Service({
                name: 'Plasterboard insulation item placeholder 03',
                descriptionHeader: 'Plasterboard Repair',
                description: 'Vestibulum imperdiet consequat hendrerit. Nunc tortor risus, facilisis efficitur elit ut, malesuada lobortis erat. Quisque laoreet interdum elementum. Sed eget sagittis sem.',
                quantity: 0,
                price: 600
            }),
            new Service({
                name: 'Plasterboard insulation item placeholder 04',
                descriptionHeader: 'Plasterboard Repair',
                description: 'Vestibulum imperdiet consequat hendrerit. Nunc tortor risus, facilisis efficitur elit ut, malesuada lobortis erat. Quisque laoreet interdum elementum. Sed eget sagittis sem.',
                quantity: 0,
                price: 320
            }),
            new Service({
                name: 'Plasterboard insulation item placeholder 05',
                descriptionHeader: 'Plasterboard Repair',
                description: 'Vestibulum imperdiet consequat hendrerit. Nunc tortor risus, facilisis efficitur elit ut, malesuada lobortis erat. Quisque laoreet interdum elementum. Sed eget sagittis sem.',
                quantity: 0,
                price: 200
            }),
            new Service({
                name: 'Plasterboard insulation item placeholder 06',
                descriptionHeader: 'Plasterboard Repair',
                description: 'Vestibulum imperdiet consequat hendrerit. Nunc tortor risus, facilisis efficitur elit ut, malesuada lobortis erat. Quisque laoreet interdum elementum. Sed eget sagittis sem.',
                quantity: 0,
                price: 150
            })
        ]
    });
    var flooringCategory = new Category({
        name: 'Flooring',
        services: [
            new Service({
                name: 'Flooring item placeholder 01',
                descriptionHeader: 'Flooring Repair',
                description: 'Vestibulum imperdiet consequat hendrerit. Nunc tortor risus, facilisis efficitur elit ut, malesuada lobortis erat. Quisque laoreet interdum elementum. Sed eget sagittis sem.',
                quantity: 0,
                price: 150
            }),
            new Service({
                name: 'Flooring item placeholder 02',
                descriptionHeader: 'Flooring Repair',
                description: 'Vestibulum imperdiet consequat hendrerit. Nunc tortor risus, facilisis efficitur elit ut, malesuada lobortis erat. Quisque laoreet interdum elementum. Sed eget sagittis sem.',
                quantity: 0,
                price: 50
            }),
            new Service({
                name: 'Flooring item placeholder 03',
                descriptionHeader: 'Flooring Repair',
                description: 'Vestibulum imperdiet consequat hendrerit. Nunc tortor risus, facilisis efficitur elit ut, malesuada lobortis erat. Quisque laoreet interdum elementum. Sed eget sagittis sem.',
                quantity: 0,
                price: 300
            }),
            new Service({
                name: 'Flooring item placeholder 04',
                descriptionHeader: 'Flooring Repair',
                description: 'Vestibulum imperdiet consequat hendrerit. Nunc tortor risus, facilisis efficitur elit ut, malesuada lobortis erat. Quisque laoreet interdum elementum. Sed eget sagittis sem.',
                quantity: 0,
                price: 120
            }),
            new Service({
                name: 'Flooring item placeholder 05',
                descriptionHeader: 'Flooring Repair',
                description: 'Vestibulum imperdiet consequat hendrerit. Nunc tortor risus, facilisis efficitur elit ut, malesuada lobortis erat. Quisque laoreet interdum elementum. Sed eget sagittis sem.',
                quantity: 0,
                price: 500
            }),
            new Service({
                name: 'Flooring item placeholder 06',
                descriptionHeader: 'Flooring Repair',
                description: 'Vestibulum imperdiet consequat hendrerit. Nunc tortor risus, facilisis efficitur elit ut, malesuada lobortis erat. Quisque laoreet interdum elementum. Sed eget sagittis sem.',
                quantity: 0,
                price: 100
            }),
            new Service({
                name: 'Flooring item placeholder 07',
                descriptionHeader: 'Flooring Repair',
                description: 'Vestibulum imperdiet consequat hendrerit. Nunc tortor risus, facilisis efficitur elit ut, malesuada lobortis erat. Quisque laoreet interdum elementum. Sed eget sagittis sem.',
                quantity: 0,
                price: 250
            })
        ]
    });
    var plumbingCategory = new Category({
        name: 'Plumbing',
        services: [
            new Service({
                name: 'Plumbing item placeholder 01',
                descriptionHeader: 'Plumbing Repair',
                description: 'Vestibulum imperdiet consequat hendrerit. Nunc tortor risus, facilisis efficitur elit ut, malesuada lobortis erat. Quisque laoreet interdum elementum. Sed eget sagittis sem.',
                quantity: 0,
                price: 150
            }),
            new Service({
                name: 'Plumbing item placeholder 02',
                descriptionHeader: 'Plumbing Repair',
                description: 'Vestibulum imperdiet consequat hendrerit. Nunc tortor risus, facilisis efficitur elit ut, malesuada lobortis erat. Quisque laoreet interdum elementum. Sed eget sagittis sem.',
                quantity: 0,
                price: 200
            }),
            new Service({
                name: 'Plumbing item placeholder 03',
                descriptionHeader: 'Plumbing Repair',
                description: 'Vestibulum imperdiet consequat hendrerit. Nunc tortor risus, facilisis efficitur elit ut, malesuada lobortis erat. Quisque laoreet interdum elementum. Sed eget sagittis sem.',
                quantity: 0,
                price: 400
            })
        ]
    });
    var electricityCategory = new Category({
        name: 'Electricity',
        services: [
            new Service({
                name: 'Electricity item placeholder 01',
                descriptionHeader: 'Electricity Repair',
                description: 'Vestibulum imperdiet consequat hendrerit. Nunc tortor risus, facilisis efficitur elit ut, malesuada lobortis erat. Quisque laoreet interdum elementum. Sed eget sagittis sem.',
                quantity: 0,
                price: 50
            }),
            new Service({
                name: 'Electricity item placeholder 02',
                descriptionHeader: 'Electricity Repair',
                description: 'Vestibulum imperdiet consequat hendrerit. Nunc tortor risus, facilisis efficitur elit ut, malesuada lobortis erat. Quisque laoreet interdum elementum. Sed eget sagittis sem.',
                quantity: 0,
                price: 400
            }),
            new Service({
                name: 'Electricity item placeholder 03',
                descriptionHeader: 'Electricity Repair',
                description: 'Vestibulum imperdiet consequat hendrerit. Nunc tortor risus, facilisis efficitur elit ut, malesuada lobortis erat. Quisque laoreet interdum elementum. Sed eget sagittis sem.',
                quantity: 0,
                price: 2000
            }),
            new Service({
                name: 'Electricity item placeholder 04',
                descriptionHeader: 'Electricity Repair',
                description: 'Vestibulum imperdiet consequat hendrerit. Nunc tortor risus, facilisis efficitur elit ut, malesuada lobortis erat. Quisque laoreet interdum elementum. Sed eget sagittis sem.',
                quantity: 0,
                price: 300
            }),
            new Service({
                name: 'Electricity item placeholder 05',
                descriptionHeader: 'Electricity Repair',
                description: 'Vestibulum imperdiet consequat hendrerit. Nunc tortor risus, facilisis efficitur elit ut, malesuada lobortis erat. Quisque laoreet interdum elementum. Sed eget sagittis sem.',
                quantity: 0,
                price: 250
            })
        ]
    });
    var masonryCategory = new Category({
        name: 'Masonry',
        services: [
            new Service({
                name: 'Masonry item placeholder 01',
                descriptionHeader: 'Masonry Repair',
                description: 'Vestibulum imperdiet consequat hendrerit. Nunc tortor risus, facilisis efficitur elit ut, malesuada lobortis erat. Quisque laoreet interdum elementum. Sed eget sagittis sem.',
                quantity: 0,
                price: 100
            }),
            new Service({
                name: 'Masonry item placeholder 02',
                descriptionHeader: 'Masonry Repair',
                description: 'Vestibulum imperdiet consequat hendrerit. Nunc tortor risus, facilisis efficitur elit ut, malesuada lobortis erat. Quisque laoreet interdum elementum. Sed eget sagittis sem.',
                quantity: 0,
                price: 200
            }),
            new Service({
                name: 'Masonry item placeholder 03',
                descriptionHeader: 'Masonry Repair',
                description: 'Vestibulum imperdiet consequat hendrerit. Nunc tortor risus, facilisis efficitur elit ut, malesuada lobortis erat. Quisque laoreet interdum elementum. Sed eget sagittis sem.',
                quantity: 0,
                price: 150
            }),
            new Service({
                name: 'Masonry item placeholder 04',
                descriptionHeader: 'Masonry Repair',
                description: 'Vestibulum imperdiet consequat hendrerit. Nunc tortor risus, facilisis efficitur elit ut, malesuada lobortis erat. Quisque laoreet interdum elementum. Sed eget sagittis sem.',
                quantity: 0,
                price: 300
            }),
            new Service({
                name: 'Masonry item placeholder 05',
                descriptionHeader: 'Masonry Repair',
                description: 'Vestibulum imperdiet consequat hendrerit. Nunc tortor risus, facilisis efficitur elit ut, malesuada lobortis erat. Quisque laoreet interdum elementum. Sed eget sagittis sem.',
                quantity: 0,
                price: 400
            }),
            new Service({
                name: 'Masonry item placeholder 06',
                descriptionHeader: 'Masonry Repair',
                description: 'Vestibulum imperdiet consequat hendrerit. Nunc tortor risus, facilisis efficitur elit ut, malesuada lobortis erat. Quisque laoreet interdum elementum. Sed eget sagittis sem.',
                quantity: 0,
                price: 250
            }),
            new Service({
                name: 'Masonry item placeholder 07',
                descriptionHeader: 'Masonry Repair',
                description: 'Vestibulum imperdiet consequat hendrerit. Nunc tortor risus, facilisis efficitur elit ut, malesuada lobortis erat. Quisque laoreet interdum elementum. Sed eget sagittis sem.',
                quantity: 0,
                price: 600
            }),
            new Service({
                name: 'Masonry item placeholder 08',
                descriptionHeader: 'Masonry Repair',
                description: 'Vestibulum imperdiet consequat hendrerit. Nunc tortor risus, facilisis efficitur elit ut, malesuada lobortis erat. Quisque laoreet interdum elementum. Sed eget sagittis sem.',
                quantity: 0,
                price: 400
            })
        ]
    });
    var heatingAirConditioningCategory = new Category({
        name: 'Heating and air conditioning',
        services: [
            new Service({
                name: 'Heating and air conditioning item placeholder 01',
                descriptionHeader: 'Air conditioning Repair',
                description: 'Vestibulum imperdiet consequat hendrerit. Nunc tortor risus, facilisis efficitur elit ut, malesuada lobortis erat. Quisque laoreet interdum elementum. Sed eget sagittis sem.',
                quantity: 0,
                price: 150
            }),
            new Service({
                name: 'Heating and air conditioning item placeholder 02',
                descriptionHeader: 'Air conditioning Repair',
                description: 'Vestibulum imperdiet consequat hendrerit. Nunc tortor risus, facilisis efficitur elit ut, malesuada lobortis erat. Quisque laoreet interdum elementum. Sed eget sagittis sem.',
                quantity: 0,
                price: 300
            }),
            new Service({
                name: 'Heating and air conditioning item placeholder 03',
                descriptionHeader: 'Air conditioning Repair',
                description: 'Vestibulum imperdiet consequat hendrerit. Nunc tortor risus, facilisis efficitur elit ut, malesuada lobortis erat. Quisque laoreet interdum elementum. Sed eget sagittis sem.',
                quantity: 0,
                price: 450
            }),
            new Service({
                name: 'Heating and air conditioning item placeholder 04',
                descriptionHeader: 'Air conditioning Repair',
                description: 'Vestibulum imperdiet consequat hendrerit. Nunc tortor risus, facilisis efficitur elit ut, malesuada lobortis erat. Quisque laoreet interdum elementum. Sed eget sagittis sem.',
                quantity: 0,
                price: 50
            }),
            new Service({
                name: 'Heating and air conditioning item placeholder 05',
                descriptionHeader: 'Air conditioning Repair',
                description: 'Vestibulum imperdiet consequat hendrerit. Nunc tortor risus, facilisis efficitur elit ut, malesuada lobortis erat. Quisque laoreet interdum elementum. Sed eget sagittis sem.',
                quantity: 0,
                price: 500
            })
        ]
    });
    allCategorys = [
        wallCeilingCoveringCategory,
        carpentryCategory,
        plasterboardInsulationCategory,
        flooringCategory,
        plumbingCategory,
        electricityCategory,
        masonryCategory,
        heatingAirConditioningCategory
    ]
//#endregion
//#region Declorations
    //#region Finding service elements
        var allServiceNames = document.getElementsByClassName('pTool-service-text-name');

        var questionnaireServiceName = document.querySelector('.pTool-service-text-name-questionnaire');
        var serviceHeaderDescription = document.getElementsByClassName('pTool-service-description-header')[0];
        var serviceDescription = document.getElementsByClassName('pTool-service-text-description')[0];
        var serviceQuantitie = document.getElementsByClassName('pTool-quantity-input')[0];
        var servicePrice = document.getElementsByClassName('pTool-service-price-text')[0];
    //#endregion
    //#region Finding all categroy buttons
        var allCategoryButtons = document.getElementsByClassName('category-cube');
        var wallCeilingCoveringButton = allCategoryButtons[0];
        var carpentryButton = allCategoryButtons[1];
        var plasterboardInsulationButton = allCategoryButtons[2];
        var flooringButton = allCategoryButtons[3];
        var plumbingButton = allCategoryButtons[4];
        var electricityButton = allCategoryButtons[5];
        var masonryButton = allCategoryButtons[6];
        var heatingAirConditioningButton = allCategoryButtons[7];
    //#endregion
    var allServiceContainers = document.getElementsByClassName('pTool-service-container');
    var currentCategory;

    var subTotalEle = document.querySelector('.pTool-subTotal-dollars');
    var taxEle = document.querySelector('.pTool-tax-dollars');
    var totalEle = document.querySelector('.pTool-total-dollars');

    var questionnaireContainer = document.getElementsByClassName('pTool-questionnaire-container')[0];
    var categoryContainer = document.querySelector('.pTool-service-category-container');
    var backButton = document.querySelector('.back-button');
    var currentSurvice;
    var currentServiceIndex;

    var nextButton = document.querySelector('.pTool-service-button-next');
    var questionnaireContainers = document.querySelectorAll('.service-grid-container-questionnaire');
    var pricContainer = document.querySelector('.pTool-price-container');

    //#region Decision elements
        var desitionTotal = document.getElementById('p-tool-decition-total');
        var decisionContainer = document.querySelector('.pTool-decision-container');
        var showReciptButton = document.querySelector('.p-tool-decition-show-receipt-button');
        var emailReciptButton = document.querySelector('.p-tool-decition-email-receipt-button');
    //#endregion

    //#region Receipt elements
        var receiptContainer = document.querySelector('.pTool-recipts-container');
        var receiptNext = document.querySelector('.pTool-receipt-next');
        var reciptServiceContainers = document.getElementsByClassName('pTool-recipt-container');
        var reciptServiceNames = document.getElementsByClassName('pTool-text-receipt-name');
        var reciptServiceDescriptionHeaders = document.getElementsByClassName('pTool-service-receipt-description-header');
        var reciptServiceDescriptions = document.getElementsByClassName('pTool-service-receipt-description');
        var reciptServiceQuantitys = document.getElementsByClassName('pTool-quantity-receipt-receipt-input');
    //#endregion

    //#region Email input elements
        var emailInputContainer = document.querySelector('.pTool-email-input-container');
        var emailInput = document.querySelector('.pTool-email-input');
        var emailSubmit = document.querySelector('.pTool-email-input-button');
        var emailErrorEle = document.getElementById('email-error');
        var emailAdress = "";
    //#endregion

    //#region Email confermation elements
        var emailConfermationContainer = document.querySelector('.pTool-email-confirmation-container');
        var emailConfermationNext = document.querySelector('.pTool-email-confirmation-button');
    //#endregion

    //#region CONSTS
        var EMAIL_END = '</div>';
    //#endregion
//#endregion

//#region Click listeners
    //#region Category listeners
        for(let i = 0; i < allCategoryButtons.length; i++){
            allCategoryButtons[i].addEventListener('click', () => {
                hideAllServices();
                questionnaireInit();
            });
        }
        wallCeilingCoveringButton.addEventListener('click', () => {
            updateServiceContainers(wallCeilingCoveringCategory)
        });
        carpentryButton.addEventListener('click', () => {
            updateServiceContainers(carpentryCategory);
        });
        plasterboardInsulationButton.addEventListener('click', () => {
            updateServiceContainers(plasterboardInsulationCategory);
        });
        flooringButton.addEventListener('click', () => {
            updateServiceContainers(flooringCategory);
        });
        plumbingButton.addEventListener('click', () => {
            updateServiceContainers(plumbingCategory);
        });
        electricityButton.addEventListener('click', () => {
            updateServiceContainers(electricityCategory);
        });
        masonryButton.addEventListener('click', () => {
            updateServiceContainers(masonryCategory);
        });
        heatingAirConditioningButton.addEventListener('click', () => {
            updateServiceContainers(heatingAirConditioningCategory);
        });
    //#endregion
    //Decition listeners
    showReciptButton.addEventListener('click', showRecieptPage);
    emailReciptButton.addEventListener('click', () => {
        navigateTo(emailInputContainer);
    });
    //Receipt listeners
    receiptNext.addEventListener('click', () => {
        returnToMain();
    });
    //Email input listeners
    emailSubmit.addEventListener('click', runSubmitButton);
    //Email confermation listeners
    emailConfermationNext.addEventListener('click', () => {
        returnToMain();
    })
//#endregion

//#region Category button functionality

        function updateServiceContainers(servaceCategory){
            setCurrentServiceCategoryAndIndex(servaceCategory);
            questionnaireService(currentSurvice);
        }
        function setCurrentServiceCategoryAndIndex(servaceCategory){
            currentCategory = servaceCategory;
            currentServiceIndex = 0;
            currentSurvice = currentCategory.getAllServices()[0];
        }
        function removeSelectedFromAllCategorys(){
            for(var i = 0; i < allCategoryButtons.length; i++){
                allCategoryButtons[i].classList.remove('pTool-selected-cube');
            }
        }
        function addSelectedToElement(ele){
            if(!ele.classList.contains('pTool-selected-cube')){
                removeSelectedFromAllCategorys();
                ele.classList.add('pTool-selected-cube');
            }
        }
        function hideAllServices(){
            for(var i = 0; i < allServiceContainers.length; i++){
                if(!allServiceContainers[i].classList.contains('display-none')){
                    allServiceContainers[i].classList.add('display-none');
                }
            }
        }
        function showService(n){
            if(allServiceContainers[n].classList.contains('display-none')){
                allServiceContainers[n].classList.remove('display-none');
            }
        }
//#endregion
//#region Price functionality
    //#region Helper functions
        function getSubTotalPrice(){
            var subTotal = 0;
            allCategorys.forEach(category => {
                category.getAllServices().forEach(service => {
                    var addOnPrice = service.getQuantity() * service.getPrice();
                    subTotal += addOnPrice;
                });
            });

            return subTotal;
        }
        function getTax(subTotal, tax){
            tax = tax || 0.2;
            var taxCost = Math.round(subTotal * tax);
            return taxCost;
        }
        function getTaxStandAlone(tax){
            tax = tax || 0.2;
            var subTotal = getSubTotalPrice();
            var taxCost = Math.round(subTotal * tax);
            return taxCost;
        }
        function getTotalPrice(subTotal, tax){
            return (subTotal + tax);
        }
        function getTotalPriceStandAlone(){
            var subTotal = getSubTotalPrice();
            var tax = getTax(subTotal);
            return getTotalPrice(subTotal, tax);
        }
        function resetQuantities(){
            allCategorys.forEach(category => {
                category.getAllServices().forEach(service => {
                    service.setQuantity(0);
                });
            });
        }
        function updatePriceContainer(){
            var subTotal = getSubTotalPrice();
            var tax = getTax(subTotal);
            var total = getTotalPrice(subTotal, tax);

            subTotalEle.innerText = ('$' + subTotal);
            taxEle.innerText = ('$' + tax);
            totalEle.innerText = ('$' + total);
        }   
        function createPreiceObject(){
            var priceObj = {
                subTotal: getSubTotalPrice(),
                tax: getTaxStandAlone(),
                totalPrice: getTotalPriceStandAlone()
            };

            return priceObj;
        }
    //#endregion
//#endregion
//#region questionnaire functionality
    nextButton.addEventListener('click', nextQuestionnaire);
    backButton.addEventListener('click', returnToMain);
    serviceQuantitie.addEventListener('click', quantityValueChange);

    function nextQuestionnaire(){
        if((currentServiceIndex + 1) < currentCategory.getAllServices().length){
            currentServiceIndex += 1;
            updateCurrentServiceAfterIndexChange();
            populatequestionnaireContainer();
        }
        else if((currentServiceIndex + 1) === currentCategory.getAllServices().length){
            showDecisionPage()
        }
    }
    function showDecisionPage(){
        hideAllElements();
        showEle(pricContainer);
        showEle(decisionContainer);
        desitionTotal.innerText = getTotalPriceStandAlone();
    }
    function questionnaireInit(){
        hideAllElements();
        showEle(questionnaireContainers[1]);
        showEle(serviceQuantitie);
        hideEle(pricContainer);
    }
    function questionnaireFinishedSceen(){
        questionnaireServiceName.innerText = 'The cost for your reqested service(s) is below';
        giveMTop1(nextButton);
        hideEle(questionnaireContainers[1]);
        hideEle(serviceQuantitie);
        showEle(pricContainer);
    }
    function updateCurrentServiceAfterIndexChange(){
        currentSurvice = currentCategory.getAllServices()[currentServiceIndex];
    }
    function giveServiceContainersEventListeners(){
        for(let i = 0; i < allServiceContainers.length; i++){
            giveServiceContainerEventListener(i);
        }
    }
    function initilizequestionnaireContainer(){
        hideEle(categoryContainer);
        showEle(questionnaireContainer);
    }
    function questionnaireService(currentSurvice){
        initilizequestionnaireContainer();

        //Geting data
        var serviceName = currentSurvice.getName();
        var serviceHeaderDescriptionText = currentSurvice.getDescriptionHeader();
        var serviceDescriptionText = currentSurvice.getDescription();
        var serviceQuantitieNumber = currentSurvice.getQuantity();

        //Seting data
        questionnaireServiceName.innerText = serviceName;
        serviceHeaderDescription.innerText = serviceHeaderDescriptionText;
        serviceDescription.innerText = serviceDescriptionText;
        serviceQuantitie.value = serviceQuantitieNumber;
    }
    function populatequestionnaireContainer(){
        initilizequestionnaireContainer();

        //Geting data
        var serviceName = currentSurvice.getName();
        var serviceHeaderDescriptionText = currentSurvice.getDescriptionHeader();
        var serviceDescriptionText = currentSurvice.getDescription();
        var serviceQuantitieNumber = currentSurvice.getQuantity();

        //Seting data
        questionnaireServiceName.innerText = serviceName;
        serviceHeaderDescription.innerText = serviceHeaderDescriptionText;
        serviceDescription.innerText = serviceDescriptionText;
        serviceQuantitie.value = serviceQuantitieNumber;
    }
    function returnToMain(){
        hideAllElements();
        showEle(categoryContainer);
        removeMTop1(nextButton);
        resetQuantities();
        updatePriceContainer();
    }

    function quantityValueChange(){
        var newQuantity = serviceQuantitie.value;
        currentSurvice.setQuantity(newQuantity);
        updatePriceContainer();
    }
//#endregion
//#region Helper functions
    function hideAllElements(){
        hideEle(categoryContainer);
        hideEle(pricContainer);
        hideEle(decisionContainer);
        hideEle(questionnaireContainer);
        hideEle(receiptContainer);
        hideEle(emailInputContainer);
        hideEle(emailConfermationContainer);
        hideEle(emailErrorEle);
    }

    function hidequestionnaire(){
        hideEle(questionnaireContainer);
    }
    function giveMTop1(ele){
        ele.classList.add('margin-top-1');
    }
    function removeMTop1(ele){
        while(ele.classList.contains('margin-top-1')){
            ele.classList.remove('margin-top-1');
        }
    }
    function hideEle(ele){
        if(!ele.classList.contains('display-none')){
            ele.classList.add('display-none');
        }
    }
    function showEle(ele){
        while(ele.classList.contains('display-none')){
            ele.classList.remove('display-none');
        }
    }
    function navigateTo(containers){
        hideAllElements();
        if(Array.isArray(containers)){
            containers.forEach((container) => {
                showEle(container)
            });
        }
        else{
            showEle(containers);
        }
    }
    function hideAllRecieptServiceItems(){
        reciptServiceContainers.forEach((container) => {
            hideEle(container);
        });
    }
    function giveRecieptQuantityIntputsEventListeners(){
        for(let i = 0; i < reciptServiceQuantitys.length; i++){
            let input = reciptServiceQuantitys[i];
            //let index = input.dataset
            input.addEventListener('change', () => {
                let currentSurvace = currentCategory.getAllServices()[i];
                currentSurvace.setQuantity(input.value);
                updatePriceContainer();
            });
        }
    }
    function populateRelevantRecieptServiceItems(){
        for(let i = 0; i < reciptServiceContainers.length; i++) {
            var currentSurvace = currentCategory.getAllServices()[i];
            var max = currentCategory.getAllServices().length;
            var container = reciptServiceContainers[i];
            var nameEle = reciptServiceNames[i];
            var headerEle = reciptServiceDescriptionHeaders[i];
            var descriptionEle = reciptServiceDescriptions[i];
            var inputEle = reciptServiceQuantitys[i];
            if(i >=max){
                hideEle(container);
            }
            else{
                showEle(container);
                nameEle.innerText = currentSurvace.getName();
                headerEle.innerText = currentSurvace.getDescriptionHeader();
                descriptionEle.innerText = currentSurvace.getDescription();
                inputEle.value = currentSurvace.getQuantity();
            }
        };
    }
    function showRecieptPage(){
        navigateTo([receiptContainer, pricContainer]);
        populateRelevantRecieptServiceItems();
    }
    function runSubmitButton(){
        emailAdress = emailInput.value;
        if(emailAdress.indexOf('@') < 0){
            showEle(emailErrorEle);
            return;
        }
        //Show Loading loading screen
        sendEmail();
        navigateTo(emailConfermationContainer);
    }
    function sendEmail(){
        var bodyMessage = constructEmailBody();
        var sendInfo = {
            SecureToken: '52609d28-a075-4261-bdcf-f548a947fa27', //106fca1a-9df5-4925-84da-dd96526c3104 works
            To : emailAdress,
            From : "developer@singularitythread.com",
            Subject : "pTool details00",
            Body: bodyMessage
        }
        alert('Top of email to ' + emailAdress);
    
        Email.send(sendInfo)
        .then(
          message => alert(message)
        );
        alert('email being sent to: ' + emailAdress);
    }
    function constructEmailBody(){
        var emailBody = '';
        //#region emailBody
        emailBody = '<div>' + 
            '<div style="font-size: 1rem;">' +
            '    Below is a recipt of your services' +
            '</div>' +
            '<div style="width: 100%;">' +
            '    <div style="display: block;">' + 
            '        <div style="display: flex; width: 100%; box-sizing: border-box; background-color: #DD5962; color: white; padding-top: 0.5rem; padding-bottom: 0.5rem; padding-left: 0.5rem;">' + 
            '            <div style="width: 30%;">' + 
            '                Service' + 
            '            </div>' +
            '            <div style="width: 60%;">' +
            '                Description' +
            '            </div>' +
            '            <div style="width: 10%;">' +
            '                Quantity' +
            '            </div>' +
            '        </div>' +
            '    </div>';
        //#endregion

        //Construct service rows
        var serviceRow = '';
        currentCategory.getAllServices().forEach((service, i) => {
            serviceRow = construceEmailServiceRow(service, i);
            emailBody += serviceRow;
        });
        emailBody += '</div>'

        emailBody += constructEmailTotal();
        
        emailBody += EMAIL_END;

        return emailBody;
    }
    function construceEmailServiceRow(service, rowIndex){
        var makeBlue = (rowIndex % 2 != 0); //If rowIndex is an odd number
        var serviceRow = '<div style="display: block;' + (makeBlue ? ' background-color: #E0E2E8;' : '') + '">' + 
            '    <div style="display: flex; flex-direction: column;">' +
            '        <div style="display: flex;">' +
            '            <div style="width: 30%; padding-right: 1rem; padding-left: 0.5rem;">' +
                            service.getName() +
            '            </div>' +
            '            <div style="width: 60%;  padding-right: 1rem;">' +
                            service.getDescription() +
            '            </div>' +
            '            <div style="width: 10%;">' +
                            service.getQuantity() + 
            '            </div>' +
            '        </div>' +
            '    </div>' +
            '</div>';
            return serviceRow;
    }
    function constructEmailTotal(){
        var price = createPreiceObject();

        var emailTotal = '<div style="border: 0.12rem solid slategray; margin-left: 50%; padding-left: 1rem;">' +
            '    <div style="display: block;">' +
            '        <div style="display: flex; width: 100%">' +
            '            <p style="width: 50%; margin-top: 0.25rem; margin-bottom: 0.25rem;">Subtotal:</p>' +
            '            <p style="width: 50%; margin-top: 0.25rem; margin-bottom: 0.25rem;">$' + price.subTotal +'</p>' +
            '        </div>' +
            '    </div>' +
            '    <div style="display: block;">' +
            '        <div style="display: flex; width: 100%">' +
            '            <p style="width: 50%; margin-top: 0.25rem; margin-bottom: 0.25rem;">Tax:</p>' +
            '            <p style="width: 50%; margin-top: 0.25rem; margin-bottom: 0.25rem;">$' + price.tax + '</p>' +
            '        </div>' +
            '    </div>' +
            '    <div style="display: block;">' +
            '        <div style="display: flex; width: 100%">' +
            '            <p style="width: 50%; margin-top: 0.25rem; margin-bottom: 0.25rem;">total:</p>' +
            '            <p style="width: 50%; margin-top: 0.25rem; margin-bottom: 0.25rem;">$' + price.totalPrice + '</p>' +
            '        </div>' +
            '    </div>' +
            '</div>';

            return emailTotal;
    }
//#endregion

//Init HTML
(function(){
    updatePriceContainer();
    giveRecieptQuantityIntputsEventListeners();
})();