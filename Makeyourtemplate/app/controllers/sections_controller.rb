class SectionsController < ApplicationController

	# to show the template view
		def index
			@sections = Section.order(section_name: :asc)
		end

	# # to get the right css attributes in the generator (h1 and p in text)
	# 	def show
	# 	end

	# to update the database with the user input
		def update
			@section = Section.find ( params[:id] )
			@sections = Section.all

			if @section.update_attributes( section_params )
				redirect_to @sections
			else
				render 'index'
			end
		end

		private

		def section_params
			params.require(:section).permit(:section_name, :css_rules)
		end

end
