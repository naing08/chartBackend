module.exports=(sequelize,DataTypes)=>{
	var Chart= sequelize.define('Chart',{
		Name:{
			type:DataTypes.STRING(50),
			allowNull:false,
			validate:{
				notEmpty:{
					msg:'Name is required'
				},
				len:{
					args:[[0,50]],
					msg:'Need to be less than 50 characters'
				}
			}
		},
        Gender:{
            type:DataTypes.STRING(1),
            allowNull:false
        },
        Age:{
            type:DataTypes.INTEGER
        }
	});
	return Chart;
}